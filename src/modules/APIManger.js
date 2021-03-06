import Settings from "./Settings"

export default Object.create(null, {
  get: {
    value: function (id) {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${id}`)
        .then(r => r.json())
    }
  },

  getAll: {
    value: function () {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`)
        .then(r => r.json())
    }
  },

  getAllUserSessions: {
    value: function () {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`)
        .then(r => r.json())
    }
  },

  deleteAndList: {
    value: function (id) {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${id}`, {
        method: "DELETE"
      })
        .then(r => r.json())
        .then(() => fetch(`${Settings.remoteURL}/${this.desiredDatabase}`))
        .then(r => r.json())
    }
  },

  post: {
    value: function (obj) {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(r => r.json())
    }
  },

  put: {
    value: function(obj) {
        return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${obj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(e => e.json())
    }
  },

  sortSessions: {
    value: function () {
      return fetch(`${Settings.remoteURL}/sessions?/userId=${sessionStorage.getItem("credentials")}&_sort=date&_order=desc`)
        .then(r => r.json())
    }
  },

  editUser: {
    value: function (newObject) {
      return fetch(`${Settings.remoteURL}/users/${sessionStorage.getItem("credentials")}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
      })
    }
  },

  getAllUserFriends: {
    value: function () {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`)
        .then(r => r.json())
    }
  },

  addFriend: {
    value: function (obj) {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(r => r.json())
    }
  }

})