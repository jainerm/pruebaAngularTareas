import { checkOperationCases } from '../utils';
export function createDataOperationMethod(ref, operation) {
    return function dataOperation(item, value) {
        return checkOperationCases(item, {
            stringCase: () => ref.child(item)[operation](value),
            firebaseCase: () => item[operation](value),
            snapshotCase: () => item.ref[operation](value)
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1vcGVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2UvbGlzdC9kYXRhLW9wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFL0MsTUFBTSxVQUFVLHlCQUF5QixDQUFJLEdBQXNCLEVBQUUsU0FBaUI7SUFDcEYsT0FBTyxTQUFTLGFBQWEsQ0FBSSxJQUF1QixFQUFFLEtBQVE7UUFDaEUsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzdELFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBRSxJQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNqRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUUsSUFBNEIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3hFLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhYmFzZVJlZmVyZW5jZSwgRGF0YWJhc2VTbmFwc2hvdCwgRmlyZWJhc2VPcGVyYXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGNoZWNrT3BlcmF0aW9uQ2FzZXMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRhT3BlcmF0aW9uTWV0aG9kPFQ+KHJlZjogRGF0YWJhc2VSZWZlcmVuY2UsIG9wZXJhdGlvbjogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkYXRhT3BlcmF0aW9uPFQ+KGl0ZW06IEZpcmViYXNlT3BlcmF0aW9uLCB2YWx1ZTogVCkge1xuICAgIHJldHVybiBjaGVja09wZXJhdGlvbkNhc2VzKGl0ZW0sIHtcbiAgICAgIHN0cmluZ0Nhc2U6ICgpID0+IHJlZi5jaGlsZChpdGVtIGFzIHN0cmluZylbb3BlcmF0aW9uXSh2YWx1ZSksXG4gICAgICBmaXJlYmFzZUNhc2U6ICgpID0+IChpdGVtIGFzIERhdGFiYXNlUmVmZXJlbmNlKVtvcGVyYXRpb25dKHZhbHVlKSxcbiAgICAgIHNuYXBzaG90Q2FzZTogKCkgPT4gKGl0ZW0gYXMgRGF0YWJhc2VTbmFwc2hvdDxUPikucmVmW29wZXJhdGlvbl0odmFsdWUpXG4gICAgfSk7XG4gIH07XG59XG4iXX0=