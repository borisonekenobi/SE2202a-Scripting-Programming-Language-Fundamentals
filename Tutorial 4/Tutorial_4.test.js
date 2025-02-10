const Tutorial_4 = require('./Tutorial_4')

// Western Order's Test

test('Western order with one name'
    , () => {
        expect(Tutorial_4.westernOrderParser('Taylor Alison Swift')).toBe('[{"first":"Taylor","middle":"Alison","last":"Swift"}]')
    });

test('Western order with two names'
    , () => {
        expect(Tutorial_4.westernOrderParser('Taylor Alison Swift', 'Karlie Elizabeth Kloss')).toBe('[{"first":"Taylor","middle":"Alison","last":"Swift"}'+
                                                                             ',{"first":"Karlie","middle":"Elizabeth","last":"Kloss"}]') ;
    });


test('Western order with 3 names'
    , () => {
        expect(Tutorial_4.westernOrderParser('Steven Paul Jobs','Stephen Gary Wozniak', 'William Henry Gates')).toBe('[{"first":"Steven","middle":"Paul","last":"Jobs"}'+
                                                                                         ',{"first":"Stephen","middle":"Gary","last":"Wozniak"}'+
                                                                                         ',{"first":"William","middle":"Henry","last":"Gates"}]') ;
    });

// Eastern Order's Test

test('Eastern order with one name'
    , () => {
        expect(Tutorial_4.easternOrderParser('Swift Alison Taylor')).toBe('[{"first":"Taylor","middle":"Alison","last":"Swift"}]')
    });

test('Eastern order with two names'
    , () => {
        expect(Tutorial_4.easternOrderParser('Swift Alison Taylor', 'Kloss Elizabeth Karlie')).toBe('[{"first":"Taylor","middle":"Alison","last":"Swift"}'+
        ',{"first":"Karlie","middle":"Elizabeth","last":"Kloss"}]') ; ;
    });


test('Eastern order with 3 names'
    , () => {
        expect(Tutorial_4.easternOrderParser('Jobs Paul Steven','Wozniak Gary Stephen', 'Gates Henry William')).toBe('[{"first":"Steven","middle":"Paul","last":"Jobs"}'+
        ',{"first":"Stephen","middle":"Gary","last":"Wozniak"}'+
        ',{"first":"William","middle":"Henry","last":"Gates"}]');
    });

// School Order's Test

test('Western order with one name'
    , () => {
        expect(Tutorial_4.schoolOrderParser('Swift Taylor Alison')).toBe('[{"first":"Taylor","middle":"Alison","last":"Swift"}]')
    });

test('Western order with two names'
    , () => {
        expect(Tutorial_4.schoolOrderParser('Swift Taylor Alison', 'Kloss Karlie Elizabeth')).toBe('[{"first":"Taylor","middle":"Alison","last":"Swift"}'+
        ',{"first":"Karlie","middle":"Elizabeth","last":"Kloss"}]') ; ;
    });


test('Western order with 3 names'
    , () => {
        expect(Tutorial_4.schoolOrderParser('Jobs Steven Paul','Wozniak Stephen Gary', 'Gates William Henry')).toBe('[{"first":"Steven","middle":"Paul","last":"Jobs"}'+
        ',{"first":"Stephen","middle":"Gary","last":"Wozniak"}'+
        ',{"first":"William","middle":"Henry","last":"Gates"}]') ;
    });



    
test('School Order with 6 names'
, () => {
    expect(Tutorial_4.schoolOrderParser('Jobs Steven Paul','Wozniak Stephen Gary', 'Gates William Henry','Swift Taylor Alison', 'Kloss Karlie Elizabeth', 'Agron Dianna Elise' ))
                                        .toBe('[{"first":"Steven","middle":"Paul","last":"Jobs"}'+
                                        ',{"first":"Stephen","middle":"Gary","last":"Wozniak"}'+
                                        ',{"first":"William","middle":"Henry","last":"Gates"}'+
                                        ',{"first":"Taylor","middle":"Alison","last":"Swift"}'+
                                        ',{"first":"Karlie","middle":"Elizabeth","last":"Kloss"}'+
                                        ',{"first":"Dianna","middle":"Elise","last":"Agron"}]') ;
});

//test that they used return function

test('Using Closure ',() => {expect(Tutorial_4.schoolOrderParser.name==Tutorial_4.easternOrderParser.name).toBe(true)});
test('Using Closure continue',() => {expect(Tutorial_4.schoolOrderParser.name==Tutorial_4.westernOrderParser.name).toBe(true)});