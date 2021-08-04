# Backup themeConfig & vue.config.js
mv themeConfig.js themeConfig.js.bak
mv vue.config.js vue.config.js.bak

# Remove dist directory
rm -rf dist

processDemo() {
    # Thanks: https://stackoverflow.com/a/428580/10796681
    demoIndex=${1:24:1}


    cp $1/vue.config.js .
    cp $1/themeConfig.js .

    # Inject demo string in active theme localstorage key
    sed -i "s/materio-active-theme/materio-active-theme-demo-$demoIndex/g" ./src/@core/@app-config/useAppConfig.js
    sed -i "s/materio-active-theme/materio-active-theme-demo-$demoIndex/g" ./src/@core/preset/preset/index.js

    # Inject demo string in active skin localstorage key
    sed -i "s/materio-skin-variant/materio-skin-variant-demo-$demoIndex/g" ./src/@core/@app-config/useAppConfig.js
    sed -i "s/materio-skin-variant/materio-skin-variant-demo-$demoIndex/g" ./src/@core/@app-config/appConfigStoreModule.js

    yarn build

    # Restore demo string in active theme localstorage key
    sed -i "s/materio-active-theme-demo-$demoIndex/materio-active-theme/g" ./src/@core/@app-config/useAppConfig.js
    sed -i "s/materio-active-theme-demo-$demoIndex/materio-active-theme/g" ./src/@core/preset/preset/index.js

    # Restore demo string in active skin localstorage key
    sed -i "s/materio-skin-variant-demo-$demoIndex/materio-skin-variant/g" ./src/@core/@app-config/useAppConfig.js
    sed -i "s/materio-skin-variant-demo-$demoIndex/materio-skin-variant/g" ./src/@core/@app-config/appConfigStoreModule.js
}

# Loop over demos
for i in scripts/data/demos/*; do
    processDemo $i
done

# Restore themeConfig & vue.config.js
mv themeConfig.js.bak themeConfig.js
mv vue.config.js.bak vue.config.js