# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "hossaini.bootstrap-intellisense"
      "html-validate.vscode-html-validate"
      "yandeu.five-server"
    ];
  };
}
