f = open("./pages/index.tsx", "r")
data = f.readlines()
current = data[0]

current = [*current]
current = current[17:-2]
f.close
open("./pages/index.tsx", "w").close()
f = open("./pages/index.tsx", "w")
new = "".join(current)
new = str(float(new) + 0.01)
new = new[:4]
data[0] =  'const version = "' + new + '"\n'
f.truncate(0)
f.writelines(data)
f.close
