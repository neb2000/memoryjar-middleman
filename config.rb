
activate :external_pipeline,
   name: :webpack,
   command: build? ? 'yarn build' : 'yarn start',
   source: '.tmp/dist',
   latency: 1

activate :directory_indexes

set :js_dir, 'assets/javascripts'
set :css_dir, 'assets/stylesheets'

set :haml, { format: :html5 }

# activate :google_analytics do |ga|
#   ga.tracking_id = 'UA-34338110-1'
# end

# activate :sprockets do |c|
#   c.expose_middleman_helpers = true
# end

# Build-specific configuration
configure :build do
  # # Enable cache buster
  activate :asset_hash

  # # Use relative URLs
  activate :relative_assets

  activate :gzip
  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
