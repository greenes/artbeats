# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Profile.create(artist_id: 1, name: 'Annie Greene', profile: 'my life story')
Profile.create(artist_id: 2, name: 'matt Greene', profile: 'my life story')

Gallery.create(artist_id: 1, gallery_name: 'bye felicia', description: 'comic pieces with pen and sketch paper')
Gallery.create(artist_id: 1, gallery_name: 'home sweet home', description: 'photographs of Richmond')
Gallery.create(artist_id: 1, gallery_name: 'the blue period', description: 'human figures watercolors')
Gallery.create(artist_id: 1, gallery_name: 'running away', description: 'acryllic paint')
Gallery.create(artist_id: 1, gallery_name: 'love', description: 'sculptures made from things i found around the neighborhood')

Piece.create(gallery_id: 1, piece_name: 'coming home', piece_url: 'IMG_0968', piece_description: 'charcoal sketch')
Piece.create(gallery_id: 2, piece_name: 'coming home', piece_url: 'IMG_0969', piece_description: 'charcoal sketch')
Piece.create(gallery_id: 2, piece_name: 'coming home', piece_url: 'IMG_0971', piece_description: 'charcoal sketch')
Piece.create(gallery_id: 1, piece_name: 'coming home', piece_url: 'IMG_0972', piece_description: 'charcoal sketch')
Piece.create(gallery_id: 1, piece_name: 'coming home', piece_url: 'IMG_0964', piece_description: 'charcoal sketch')
