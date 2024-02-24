require 'net/http'



module Moderable

  extend ActiveSupport::Concern



  included do

    before_save :moderate_content

    validates :is_accepted, inclusion: { in: [true, false] }

  end



  def moderate_content

    columns_to_moderate.each do |column|

      content = send(column)

      next unless content.present?



      prediction = call_moderation_api(content)

      self.is_accepted = prediction < 0.5 if prediction.present?

    end

  end



  def call_moderation_api(text)

    uri = URI('https://moderation.logora.fr/predict')

    params = { text: text, language: 'fr-FR' }

    uri.query = URI.encode_www_form(params)



    response = Net::HTTP.get_response(uri)



    if response.is_a?(Net::HTTPSuccess)

      json_response = JSON.parse(response.body)

      json_response['prediction']['0']



    else

      puts "Erreur lors de l'appel à l'API de modération: #{response.code} - #{response.message}"

      nil

    end

  end



  def columns_to_moderate

    [:content]

  end

end

