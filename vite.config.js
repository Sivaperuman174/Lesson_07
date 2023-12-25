/** @type {import('vite').UserConfig} */
export default {
    root:"src",
    publicDir:"static",
    server:
    {
        host: true
    },
    build:
    {
     minify: true,
     outDir:"../dist",
     emptyOutDir:true,
     sourcemap:true
    }

}