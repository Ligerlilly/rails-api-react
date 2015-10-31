require 'rails_helper'

RSpec.describe Blab, type: :model do
  it { should validate_presence_of :content }
  it { should belong_to :user }
end
