const affix = require('../index');

afterEach(() => {
  document.body.innerHTML = ''
})

test('should render html tag', () => {
  affix('span')
  expect(document.querySelectorAll('span').length).toEqual(1)
})

test('should render div with class', () => {
  affix('.foo')
  expect(document.querySelectorAll('.foo').length).toEqual(1)
})

test('should render div with class', () => {
  affix('.foo-hah')
  expect(document.querySelectorAll('.foo-hah').length).toEqual(1)
})

test('should render div with id', () => {
  affix('#baz')
  expect(document.querySelectorAll('#baz').length).toEqual(1)
})

test('should render html tag with class', () => {
  affix('h1.foo')
  expect(document.querySelectorAll('h1.foo').length).toEqual(1)
})

test('should render html tag with id', () => {
  affix('h2#baz')
  expect(document.querySelectorAll('h2#baz').length).toEqual(1)
})

test('should render html tag with id & class', () => {
  affix('h3#zing.zoom')
  expect(document.querySelectorAll('h3#zing.zoom').length).toEqual(1)
})

test('should render html tag with class & id', () => {
  affix('h4.zoom#zing')
  expect(document.querySelectorAll('h4.zoom#zing').length).toEqual(1)
})

test('should render html tag with its child', () => {
  affix('div span ul li')
  expect(document.querySelectorAll('div span ul li').length).toEqual(1)
})

test('should render tag with its child', () => {
  affix('a b c d e f g h i j k l m n o p q r s t u v w x y z') 
  expect(document.querySelectorAll('a b c d e f g h i j k l m n o p q r s t u v w x y z').length).toEqual(1)
})

test('should render html tag with id and multiple class', () => {
  affix('.boom.bang.pow#whoosh')
  expect(document.querySelectorAll('.boom.bang.pow#whoosh').length).toEqual(1)
})

test('should render html tag with id and class children', () => {
  affix('#foo .panda')
  expect(document.querySelectorAll('#foo .panda').length).toEqual(1)
})

test('should render html tag with id and class children', () => {
  affix('input#man .restroom')
  expect(document.querySelectorAll('input#man .restroom').length).toEqual(1)
})

test('should render html tag with multiple class', () => {
  affix('.pants.zipper')
  expect(document.querySelectorAll('.pants.zipper').length).toEqual(1)
})

test('should render html tag with direct children', () => {
  affix('foo > bar > baz')
  expect(document.querySelectorAll('foo > bar > baz').length).toEqual(1)
})

test('should render html tag with define attribute', () => {
  affix('input[value="12"]')
  expect(document.querySelectorAll('input[value="12"]').length).toEqual(1)
})

test('should render html tag with custom attributes', () => {
  affix('div[class="class1 class2 class3"] span[div="div1 div2 div3"]')
  expect(document.querySelectorAll('div[class="class1 class2 class3"] span[div="div1 div2 div3"]').length).toEqual(1)
})

test('should render form with custom attributes', () => {
  affix('form fieldset[name=ok] input#foo.sp1.sp1[foo="woo"][value="13"]')
  expect(document.querySelectorAll('form fieldset[name=ok] input#foo.sp1.sp1[foo="woo"][value="13"]').length).toEqual(1)
})

test('should render html tag with data attribute', () => {
  affix('div[data-bind="my_item"]')
  expect(document.querySelectorAll('div[data-bind="my_item"]').length).toEqual(1)
})

test('should render html tag with style', () => {
  affix('.ui-dialog[style="width: 1px; height: 5px"]')
  expect(document.querySelectorAll('.ui-dialog[style="width: 1px; height: 5px"]').length).toEqual(1)
})

test('should render html tag with children and data attribute', () => {
  affix('#toddler .hidden.toy input[name="toyName"][value="cuddle bunny"]')
  expect(document.querySelectorAll('#toddler .hidden.toy input[name="toyName"][value="cuddle bunny"]').length).toEqual(1)
})

test('should render html tag and its children are siblings', () => {
  affix('div h1+h2')
  expect(document.querySelectorAll('div h1+h2').length).toEqual(1)
})