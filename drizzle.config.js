/** @type { import("drizzle-kit").Config} */

export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://short%20video%20generator_owner:1NMOHQBGlqD8@ep-curly-snow-a1i5u0jr.ap-southeast-1.aws.neon.tech/short%20video%20generator?sslmode=require',
    }
}