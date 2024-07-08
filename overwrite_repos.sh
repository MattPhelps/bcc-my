#!/bin/bash

# Commands:
# chmod +x overwrite_repos.sh - run once to execute permissions
# ./overwrite_repos.sh

# Path to the JSON file containing repo configurations
CONFIG_DATA="site-config-data.json"

# Path to the siteConfig containing all the variables
CONFIG_FILE="siteConfig.js"

# List of repositories to overwrite
repos=(
    # Add more repositories as needed
    "https://github.com/mattphelps/bcc-in"
)

# Function to update siteConfig
update_site_config() {
    local repo=$1

    python3 - <<END
import json

try:
    with open('$CONFIG_DATA', 'r') as f:
        data = json.load(f)

    if '$repo' in data:
        with open('$CONFIG_FILE', 'w') as f:
            f.write('const siteConfig = {\n')
            config = data['$repo']
            keys = [
                "gitHubRepo", "siteName", "siteURL", "shortURL", "siteTitle",
                "siteDescription", "faviconPath", "emailFormLink", "buttonColor",
                "buttonColor2", "GATag", "country", "hrefLang", "regionCode",
                "supportEmail", "ccAffLink1", "ccAffLink2", "ccAffLink3",
                "ccAffLink4", "ccAffLink5", "ccAffLink6", "ccAffLink7",
                "ccAffLink8", "ccAffLink9", "ccAffLink10"
            ]
            for key in keys:
                value = config.get(key, "")
                if isinstance(value, str):
                    f.write(f'  {key}: "{value}",\n')
                else:
                    f.write(f'  {key}: {value},\n')
            f.write('};\n\nexport default siteConfig;')
    else:
        print('Repo data not found in JSON!')
except Exception as e:
    print(f"An error occurred: {e}")
END
}

# Main loop through each repository
for repo in "${repos[@]}"; do
    echo "Working on $repo..."

    # Update siteConfig using Python
    update_site_config "$repo"

    # Check if siteConfig was updated
  

    # Commit the changes
    git add $CONFIG_FILE
    git commit -m "Updated siteConfig for $repo"

    # Add the remote repository
    git remote add temp_remote $repo

    # Push the local changes (including siteConfig update) to the remote repository
    git push -f temp_remote master

    # Remove the temporary remote
    git remote remove temp_remote

    echo "$repo updated successfully!"
done
