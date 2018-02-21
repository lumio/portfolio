#!/bin/bash

. ".env.production.local"
list_versions="$( ssh $ssh_user@$ssh_host "ls $ssh_dir | grep \"$ssh_foldername\"" )"

rm -rf build
yarn build
deploy_folder_version="$ssh_foldername-$( date +"%s" )"
deploy_dir="$ssh_dir/$deploy_folder_version"

echo "Deploying to $ssh_user@$ssh_host:$deploy_dir"
ssh $ssh_user@$ssh_host "mkdir -p \"$deploy_dir\""
rsync -av --partial --progress -e ssh --exclude ".DS_Store" \
 ./build/ $ssh_user@$ssh_host:"$deploy_dir"

ssh $ssh_user@$ssh_host "rm -rf \"$ssh_dir/$ssh_foldername\"; \
  ln -s \"$deploy_folder_version\" \"$ssh_dir/$ssh_foldername\""

for dir in $list_versions; do
  if [ "$dir" = "$ssh_foldername" ]; then
    continue
  fi
  echo "Removing $ssh_dir/$dir"
  ssh $ssh_user@$ssh_host "rm -rf \"$ssh_dir/$dir\""
done
