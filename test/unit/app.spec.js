describe('app', function ()
{
    'use strict';

    var exercise = window.app;

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(exercise.upperCase('This is a sentence')).toBe('This Is A Sentence');
            expect(exercise.upperCase('to jest mojePierwsze zDANIE')).toBe('To Jest MojePierwsze ZDANIE');
        });
        it('should not change upper case letter', function () {
            expect(exercise.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
            expect(exercise.upperCase('Wojciech Koczwara')).toBe('Wojciech Koczwara');
        });
        it('should not change punctuation', function () {
            expect(exercise.upperCase('This is,m Hard')).toBe('This Is,m Hard');
            expect(exercise.upperCase('To jest moj,e Pie,rwsze zdanie')).toBe('To Jest Moj,e Pie,rwsze Zdanie');
        });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
            expect(exercise.findAlmostMax([0, -2, 5])).toBe(0);
            expect(exercise.findAlmostMax([0, -2, 5])).toBe(0);
        });
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(40);
            expect(exercise.findAlmostMax([-10, 0, 30, 20])).toEqual(20);
        });
        it('string should be omnitted', function () {
            expect(exercise.findAlmostMax([50, 'str', 30, 10])).toBe(30);
            expect(exercise.findAlmostMax([14, 'a', 66, 69])).toBe(66);
        });
        it('empty array should return false', function () {
            expect(exercise.findAlmostMax([])).toEqual(false);
            expect(exercise.findAlmostMax([],{},{},[])).toEqual(false);
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(false);
            expect(exercise.findAlmostMax(['Jan', 'Kowalski'],[5,2])).toEqual(false);
        });
    });
});
