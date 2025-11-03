namespace webApi.DTO.product
{
    public class CreateProduct
    {
        public required string Name { get; set; }
        public required string Description { get; set; }
        public long Price { get; set; }
        public required string PictureUrl { get; set; }
        public required string Category { get; set; }
        public required string Brand { get; set; }
        public required int QuantityStocks { get; set; }
    }
}
