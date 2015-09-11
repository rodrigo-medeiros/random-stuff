var test = require('tape');

var switchProto = {
    isOn: function () {
      return this.state;
    },

    toggle: function () {
      this.state = !this.state;
      return this;
    },

    meta: {
      name: 'Light switch'
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

test('Prototype mutations', function (t) {
  switch2.meta.name = 'Breaker switch';

  t.equal(
    switch1.meta.name,
    'Breaker switch',
    'Object and array mutations are shared'
  );

  switch2.meta = { name: 'Power switch' };

  t.equal(
    switch1.meta.name,
    'Breaker switch',
    'Property replacement is instance-specific.'
  );

  t.end();

});
