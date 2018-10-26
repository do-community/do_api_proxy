# DO API Proxy

When using API requests in client-side apps, there is a danger that sensitive information like the API key will be openly accessible to the client, allowing unauthorized users to make any API requests they want. One way to account for this is to set up a proxy server that makes API requests separate from the client-side app and returns the information without ever exposing the API key to the client.

This program automatically sets up a Node.JS proxy server, allowing you to integrate DigitalOcean API requests into your client-side apps without compromising your data. 

## Prerequisites

*[Node.js](https://nodejs.org/en/) installed in your development environment.
*A DigitalOcean account with at least one [Droplet](https://www.digitalocean.com/docs/droplets/how-to/create/).
*A [Personal Access Token for the DigitalOcean API](https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-api-v2#how-to-generate-a-personal-access-token).

## Getting Started

Run the following command to install the necessary dependencies using the package manager `npm`:

```
npm install
``` 

Now that you have all the files to make the program work. But before starting the server, set the environmental variable `DOTOKEN` to your DigitalOcean API token. You can do this by opening `.bashrc` (or `.bash_profile` on OSX) and adding the following:

```
export DOTOKEN=DigitalOcean_API_token
```

Where `DigitalOcean_API_token` is your API key. Alternately, you can type the following into your CLI:

```
DOTOKEN=DigitalOcean_API_token
export DOTOKEN
```

With the environmental variable set, the app will pull the token into `index.js`, where the proxy server can use it to make requests to the DigitalOcean API.

Next, navigate to the `do_api_proxy` directory and start up the proxy server by typing the following commands:

```
cd do_api_proxy
npm start
```

The proxy server will begin listening on port `3000` and will block your window, so open up a new terminal tab.

Test that you have access to your DigitalOcean account by navigating to "http://localhost:3000/v2/droplets?page=1&per_page=1" in a browser or by sending a cURL request to the URL as follows:

```
curl http://localhost:3000/v2/droplets?page=1&per_page=1
```

If the connection is working, you will get a list of information about your droplets.

## Additional Information

To see examples of how to integrate this proxy server into your application, see `do_api_proxy/examples`.

## Contributing

Feel free to contribute to the code or to add examples of how to integrate this proxy into a client-side app in the `do_api_proxy/examples` directory!
