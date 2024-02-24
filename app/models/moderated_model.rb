require_dependency 'moderable'
class ModeratedModel < ApplicationRecord
  include Moderable

  def self.columns_to_moderate
    [:content]
  end
end
