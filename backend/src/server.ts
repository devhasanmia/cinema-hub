console.clear();
import databaseConfig from "./config/database";
import app from "./app";
import { config } from "./config";

const main = async () => {
    try {
        await databaseConfig();
        app.listen(config.port, () => {
            console.log(`Server is running on http://localhost:${config.port}/health`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

main().catch(err => console.log("error", err));