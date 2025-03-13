import { Config } from "./infrastructure/config/config";
import { connectDB } from "./infrastructure/config/db";
import app from "./app";

const startServer = async () => {
    try {
        await connectDB();

        app.listen(Config.PORT, () => {
            console.log(`Server is running on port ${Config.PORT}`);
        })

        
    } catch (error) {
        console.error('Failed to start the server:', error);
        process.exit(1);
    }
}
startServer();