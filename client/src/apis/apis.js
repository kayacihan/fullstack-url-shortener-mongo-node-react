import axios from "axios";

async function MyRedirectAPI(shortcode, error) {
    try {
        const result = await axios.get('http://localhost:3005/' + shortcode);
        if (result.data.success) {
            return (window.location.href = result.data.url)
        } else {
            return error(result.data.error)
        }
    } catch (e) {
        return error("Server Error");
    }
}

async function MySaveAPI(url, error, handleSaveShortenUrl) {
    try {
        const result = await axios.post('http://localhost:3005/',
            { url });
        console.log(result)
        if (result.data.success) {
            handleSaveShortenUrl(result.data.data.short);
        } else {
            return error(result.data.error)
        }
    } catch (e) {
        return error("Server Error");
    }
};


export { MyRedirectAPI, MySaveAPI };
