def whichFinger(input1):
  r = input1 % 8
  if r==0:
    return 2
  if r<5:
    return r
  else:
    return 10-r

print(whichFinger(20))
