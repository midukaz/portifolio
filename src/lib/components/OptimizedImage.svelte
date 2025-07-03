<script lang="ts">
  export let src: string;
  export let alt: string;
  export let width: number | undefined = undefined;
  export let height: number | undefined = undefined;
  export let loading: 'lazy' | 'eager' = 'lazy';
  
  // Gerar os caminhos das imagens otimizadas
  const baseName = src.split('/').pop()?.replace(/\.(jpg|jpeg|png)$/i, '') || '';
  const optimizedPath = '/assets/img/optimized/';
  const webpSrc = `${optimizedPath}${baseName}.webp`;
  const jpegSrc = `${optimizedPath}${baseName}.jpg`;
</script>

<picture>
  <source srcset={webpSrc} type="image/webp">
  <img 
    src={jpegSrc} 
    {alt} 
    {width} 
    {height} 
    {loading}
    {...$$restProps}
  />
</picture>

<style>
  picture {
    display: contents;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style> 