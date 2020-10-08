import Avatar from "./Avatar.svelte";

module.exports = class {
  constructor({ target, props }) {
    this._component = new Avatar({ target, props });
  }

  update(props) {
    this._component.$set(props);
  }

  on(event, callback) {
    this._component.$on(event, callback);
  }
};