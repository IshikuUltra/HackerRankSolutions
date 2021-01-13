# write a program which given starting index prints if the preceeding numbers are multiples of k
def isMultiple(k, arr):
    index = int(input('Enter a index:' )) #index should be relative to number you want to see is multiple when added to preceeding
    for i in range(index + 1, len(arr)): # does len return a zero indexed val?
        print(str(arr[index]) + ' + ' + str(arr[i]) + ' % ' + str(k) + ' = ' + str((arr[index] + i) % k == 0))

k = 4
arr = [12,10,24,19]
isMultiple(k, arr)

