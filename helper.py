#Python solution to non-divisable subset

k = 3
numbers = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282 ,718, 771, 575, 436] # 1,7,4

counts = [0] * k #populate an array of len(k)
for number in numbers:
    counts[number % k] += 1

count = max(counts[0],1)
for i in range(1, k//2+1):
    if i != k - i:
        count += max(counts[i], counts[k-i])
if k % 2 == 0: 
    count += 1

print(count)