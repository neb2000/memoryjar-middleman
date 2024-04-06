module WebpackHelpers
  def asset_pack_path(file)
    manifest_json["assets/#{file}"]
  end

  private
    def manifest_json
      @manifest ||= JSON.parse(File.read(File.join(app.root, app.extensions[:external_pipeline].values[0].options[:source], 'assets-manifest.json')))
    end
end
