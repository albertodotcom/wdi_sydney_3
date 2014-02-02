class Idea < ActiveRecord::Base
	validates :name, :robot_id, presence: true 
	
	belongs_to :robot
	belongs_to :sense
	has_and_belongs_to_many :hunches
end
