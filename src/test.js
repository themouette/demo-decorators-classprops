const decorator = (WrappedComponent) => class Decorated {
  render() {
    `Hello ${WrappedComponent.render()}`;
  }
}

@decorator
class Test {
  static propTypes = {
    foo: 'Hello'
  };

  render() {
    return 'foo';
  }
}

if (Test.propTypes !== undefined) {
  console.log('should be undefined', Test.propTypes);
  process.exit(1);
}

process.exit(0);

