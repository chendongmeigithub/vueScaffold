/**
 * 过滤器
 * @mixin
 */
export default name => () => import(`@/views/${name}`);
