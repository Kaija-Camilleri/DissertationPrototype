function computeKMeans(imgData, k) {
    // initializing
    let clusterList = newClusterList(k);
    let centroidList = new Array(k);
    let assignement = new Array(imgData.length >> 2).fill(-1);
    let color = new Color(0, 0, 0);
  
    // ending conditions
    let iter = 0, maxIter = 20;
    let previousVariance = new Array(k).fill(1);
    let variance = 0, delta = 0, deltaMax = 0, threshold = 0.00005;
  
    while (true) {
      // computing clusters
      centroidList = getClusterCentroid(imgData, clusterList);
      clusterList = newClusterList(k);
      for (let i = 0; i < imgData.length; i+=4) {
        color = getColor(imgData, i);
        assignement[i>>2] = nearestColorIdx(color, centroidList);
        clusterList[assignement[i>>2]].push(color);
      }
      // testing convergence
      deltaMax = 0;
      for (let i = 0; i < clusterList.length; i++) {
        variance = colorsVariance(clusterList[i]);
        delta = Math.abs(previousVariance[i] - variance);
        deltaMax = Math.max(deltaMax, delta);
        previousVariance[i] = variance;
      }
      iter++;
      if (iter >= maxIter || deltaMax < threshold) {
        break;
      }
    }
  
    // calculate MSE
    let mse = 0;
    for (let i = 0; i < imgData.length; i+=4) {
      let color = getColor(imgData, i);
      let clusterIdx = assignement[i>>2];
      let centroid = centroidList[clusterIdx];
      let dist = distance(color, centroid);
      mse += dist * dist;
    }
    mse /= (imgData.length >> 16);

    console.log(mse);
  
    // return result
    return { assignement: assignement, centroidList: centroidList, mse: mse };
  }