require 'rails_helper'

RSpec.describe Oauth, type: :model do
  it { should validate_presence_of :token }
  it { should validate_presence_of :secret }
end
