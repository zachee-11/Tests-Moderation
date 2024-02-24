# spec/models/moderated_model_spec.rb

require 'rails_helper'

# J'ai fait ces tests en 'fr-FR' uniquement car, après quelques tests dans la documentation, la langue n'influençait pas la reponse de l'API

RSpec.describe ModeratedModel, type: :model do
  describe 'modération' do
    context 'quand le contenu est considéré comme acceptable par notre API de modération' do
      it 'définit is_accepted à true' do
        moderated_model = ModeratedModel.new(content: 'Je suis toujours heureux en apprenant des nouvelles techonologies')
        allow(moderated_model).to receive(:call_moderation_api).and_return(0.01) # Simuler la réponse de l'API
        moderated_model.moderate_content

        moderated_model.save!

        puts "Test 1: Prédiction : #{moderated_model.call_moderation_api(moderated_model.content)}, is_accepted : #{moderated_model.is_accepted}"

        expect(moderated_model.is_accepted).to eq(true)
      end
    end

    context 'quand le contenu est considéré comme inacceptable par notre API de modération' do
      it 'définit is_accepted à false' do
        moderated_model = ModeratedModel.new(content: 'Il est un abuse des enfants de son quartier')
        allow(moderated_model).to receive(:call_moderation_api).and_return(0.9)
        moderated_model.moderate_content
        moderated_model.save!

        puts "Test 2: Prédiction : #{moderated_model.call_moderation_api(moderated_model.content)}, is_accepted : #{moderated_model.is_accepted}"

        expect(moderated_model.is_accepted).to eq(false)
      end
    end

    context 'quand le contenu est considéré comme acceptable par notre API de modération' do
      it 'définit is_accepted à true ' do
        moderated_model = ModeratedModel.new(content: 'Je pratique le développement logiciel')
        allow(moderated_model).to receive(:call_moderation_api).and_return(0.03)
        moderated_model.moderate_content
        moderated_model.save!

        puts "Test 3: Prédiction : #{moderated_model.call_moderation_api(moderated_model.content)}, is_accepted : #{moderated_model.is_accepted}"

        expect(moderated_model.is_accepted).to eq(true)
      end
    end

    context 'quand le contenu est considéré comme inacceptable par notre API de modération' do
      it 'définit is_accepted à false' do
        moderated_model = ModeratedModel.new(content: 'Il veut se suicidé à cause de son 2ème échec au Bac')
        allow(moderated_model).to receive(:call_moderation_api).and_return(0.7)
        moderated_model.moderate_content
        moderated_model.save!

        puts "Test 4: Prédiction : #{moderated_model.call_moderation_api(moderated_model.content)}, is_accepted : #{moderated_model.is_accepted}"

        expect(moderated_model.is_accepted).to eq(false)
      end
    end
  end
end
