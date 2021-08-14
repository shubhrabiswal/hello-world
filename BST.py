def isBST(self, root):
        #code here
        if root == None:
            return True
        
        if  root.left !=None and (root.left.data>=root.data): #or ord(root.left.data)>=root.data):
            return False
        
        if root.right !=None and (root.right.data<=root.data): # or ord(root.right.data)<=root.data):
            return False
        
        return True
