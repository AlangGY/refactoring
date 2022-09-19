import * as module from "../11-1";
import * as alertModule from '../11-1/alert';

const alertMockFn= jest.spyOn(alertModule,'setOffAlarms');

afterEach(() => {
    alertMockFn.mockClear();
})

describe('alert for miscreant', () => {
    test('', () => {
        const returnValue = module.findMiscreant(['조커', '사루만', '배트맨']);
        module.alertForMiscreant(['조커', '사루만', '배트맨']);
        expect(returnValue).toBe('조커');
        expect(alertModule.setOffAlarms).toHaveBeenCalled()
    });

    test('', () => {
        const returnValue = module.findMiscreant([ '사루만','조커', '배트맨']);
        module.alertForMiscreant([ '사루만','조커', '배트맨']);
        expect(returnValue).toBe('사루만');
        expect(alertModule.setOffAlarms).toHaveBeenCalled()
    });

    test('', () => {
        const returnValue = module.findMiscreant([ '할리퀸','슈퍼맨', '배트맨']);
        module.alertForMiscreant([ '할리퀸','슈퍼맨', '배트맨']);
        expect(returnValue).toBe('');
        expect(alertModule.setOffAlarms).not.toHaveBeenCalled();
    });
})