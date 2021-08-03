NUM_OF_DEMOS=2

# Backup themeConfig & vue.config.js
mv themeConfig.js themeConfig.js.bak
mv vue.config.js vue.config.js.bak

# Remove dist directory
rm -rf dist

processDemo() {
    cp $1/vue.config.js .
    cp $1/themeConfig.js .

    yarn build
}

# Loop over demos
for i in scripts/data/demos/*; do
    processDemo $i
done

# Restore themeConfig & vue.config.js
mv themeConfig.js.bak themeConfig.js
mv vue.config.js.bak vue.config.js