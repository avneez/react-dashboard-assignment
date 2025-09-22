import type { Order } from "../interfaces/types";

/**
 * API service for orders data
 */
export class OrdersAPI {
  private static baseUrl = "/mockData";

  /**
   * Fetch all orders from the mock JSON file
   * @returns Promise<Order[]> Array of orders
   */
  static async fetchOrders(): Promise<Order[]> {
    try {
      const response = await fetch(`${this.baseUrl}/orders.json`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const orders: Order[] = await response.json();
      return orders;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw new Error("Failed to fetch orders data");
    }
  }

  /**
   * Search orders by query (simulated)
   * @param query - Search query
   * @returns Promise<Order[]> Filtered orders
   */
  static async searchOrders(query: string): Promise<Order[]> {
    const orders = await this.fetchOrders();

    if (!query.trim()) {
      return orders;
    }

    const lowercaseQuery = query.toLowerCase();
    return orders.filter(order =>
      order.user.name.toLowerCase().includes(lowercaseQuery) ||
      order.project.toLowerCase().includes(lowercaseQuery) ||
      order.address.toLowerCase().includes(lowercaseQuery) ||
      order.orderId.toLowerCase().includes(lowercaseQuery) ||
      order.status.toLowerCase().includes(lowercaseQuery)
    );
  }

  /**
   * Get orders with pagination
   * @param page - Page number (1-indexed)
   * @param limit - Items per page
   * @returns Promise<{orders: Order[], total: number, page: number, totalPages: number}>
   */
  static async getOrdersPaginated(page: number = 1, limit: number = 10) {
    const allOrders = await this.fetchOrders();
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const orders = allOrders.slice(startIndex, endIndex);

    return {
      orders,
      total: allOrders.length,
      page,
      totalPages: Math.ceil(allOrders.length / limit),
      hasNext: endIndex < allOrders.length,
      hasPrev: page > 1
    };
  }

  /**
   * Sort orders by date
   * @param orders - Array of orders to sort
   * @param sortOrder - 'asc' for ascending, 'desc' for descending
   * @returns Order[] Sorted orders
   */
  static sortOrdersByDate(orders: Order[], sortOrder: 'asc' | 'desc' = 'desc'): Order[] {
    const parseDate = (dateStr: string): Date => {
      // Handle different date formats in the mock data
      if (dateStr === "Just now") {
        return new Date();
      }
      if (dateStr === "A minute ago") {
        return new Date(Date.now() - 60 * 1000);
      }
      if (dateStr === "1 hour ago") {
        return new Date(Date.now() - 60 * 60 * 1000);
      }
      if (dateStr === "Yesterday") {
        return new Date(Date.now() - 24 * 60 * 60 * 1000);
      }
      // For actual dates like "Feb 2, 2023"
      return new Date(dateStr);
    };

    return [...orders].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      if (sortOrder === 'asc') {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  }
}