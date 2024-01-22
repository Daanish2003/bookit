/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_LOCAL_URI: "mongodb+srv://redchillies6786:redchillies6786@cluster0.mmsntvj.mongodb.net/?retryWrites=true&w=majority",
        DB_URI: "",
    }
}

module.exports = nextConfig
