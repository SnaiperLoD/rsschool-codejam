module.exports = function recursion(obj) {
  const argsToArr = [obj]; 
  const res = [];

  function multilvl(args) {
    const nodes = args.filter(item => item !== undefined);
    if (nodes.length === 0) return; 

    res.push(nodes.map(node => node.value)); 

    const children = nodes.reduce((acc, item) => { 
      acc.push(item.left, item.right);
      return acc;
    }, []);

    multilvl(children); 
  }
  multilvl(argsToArr);
  return res;
};