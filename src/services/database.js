export default function database() {
    function connect() {
        console.log("> [database] Connecting database")
        console.log("> [database] Database connected")
    }
    function disconnect() {
        console.log("> [database] Disconnecting database")
        console.log("> [database] Database disconnected")
    }
    return {
        connect,
        disconnect
    }
}