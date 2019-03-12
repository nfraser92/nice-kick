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
    value: function (obj) {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${obj.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(r => r.json())
    }
  },

  sortSessions: {
    value: function (activeUser) {
      return fetch(`${Settings.remoteURL}/sessions?/userId=${activeUser}&_sort=date&_order=desc`)
        .then(r => r.json())
    }
  }

})