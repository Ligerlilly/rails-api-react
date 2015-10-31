require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of :handle }
  it { should validate_presence_of :uid }
  it { should have_many :blabs }
end
