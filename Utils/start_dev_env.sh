#! /usr/bin/env sh

script_dir=`dirname $0`
echo $script_dir
gnome-terminal --tab -- "$script_dir/graphql_mock_server/start_gql_server.sh"
gnome-terminal --tab -- "$script_dir/start_react_webapp.sh"
# https://chromium.googlesource.com/chromium/src/+/lkgr/docs/user_data_dir.md#Linux
# gnome-terminal --tab -- "google-chrome-stable --disable-web-security --user-data-dir ~/.config/google-chrome"
