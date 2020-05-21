function socket() {
    function open() {
        console.log("> [socket] Openning socket")
        console.log("> [socket] Socket openned")
    }
    function close() {
        console.log("> [socket] Closing socket")
        console.log("> [socket] Socket closed")
    }
    return {
        open,
        close
    }
}
export default {...socket()}
// Same as
// const factory = socket()
// export default {
//     open: factory.open,
//     close: factory.close,
// }