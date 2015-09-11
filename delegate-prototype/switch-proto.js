var test = require('tape');

var switchProto = {
    isOn: function () {
      return this.state;
    },

    toggle: function () {
      this.state = !this.state;
      return this;
    },

    state: false
  },
  switch1 = Object.create(switchProto),
  switch2 = Object.create(switchProto);

  test('Object create', function (t) {
    t.ok(
      switch1.toggle().isOn(),
      '.toggle() works'
    );

    t.ok(
      !switch2.isOn(),
      'instance safe'
    );

    t.end();
  });
