class Department < ActiveRecord::Base
  has_many :employees, dependent: :destroy
end
