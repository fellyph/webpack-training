import './less/form.less'

export class FormLogin {
  constructor (user, password) {
    this.user = user
    this.password = password
    this.logged = false
  }

  login (user, password) {
    if (user !== this.user) {
      return 'invalid user'
    }
    if (password === this.password) {
      this.logged = true
      return 'user logged'
    }
  }

  showCurrentUser () {
    if (this.logged) {
      return this.user
    } else {
      return 'unlogged'
    }
  }
}
