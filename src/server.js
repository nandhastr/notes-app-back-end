const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
    // Create a server with a host and port
    const server = Hapi.server({
        host: "localhost",
        port: 5000,
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();
