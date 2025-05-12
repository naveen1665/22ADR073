const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'http://20.244.56.144/evaluation-service/stocks',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDMzMzA5LCJpYXQiOjE3NDcwMzMwMDksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxNWM2OTMyLTQxY2UtNGFlNS05NGJmLTFlODQ3YzQxNzg5OCIsInN1YiI6Im5hdmVlbnJhbWNlLjIyYWlkQGtvbmd1LmVkdSJ9LCJlbWFpbCI6Im5hdmVlbnJhbWNlLjIyYWlkQGtvbmd1LmVkdSIsIm5hbWUiOiJuYXZlZW5yYW0gYyBlIiwicm9sbE5vIjoiMjJhZHIwNzMiLCJhY2Nlc3NDb2RlIjoiam1wWmFGIiwiY2xpZW50SUQiOiJlMTVjNjkzMi00MWNlLTRhZTUtOTRiZi0xZTg0N2M0MTc4OTgiLCJjbGllbnRTZWNyZXQiOiJ4UUNNZWRZWWZnQUV0SlluIn0.tz91oMD_n2r9dtlUNW0VurkcsWe5Uanj0_GwPAsS_L0'
    }
});

module.exports = axiosInstance;
