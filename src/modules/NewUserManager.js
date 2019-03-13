import APIManager from "./APIManger"

export default Object.create(APIManager, {
    desiredDatabase: {
        value: "users"
    }
})