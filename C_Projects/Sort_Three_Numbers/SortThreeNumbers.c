#include <stdio.h>
#include <stdlib.h>

/********************************************************
 *
 * Project : <Sorting Numbers>
 * File : <SortThreeNumbers.c>
 * Name : <Vin Sevilla>
 * Date : <2024 October 26>
 *
 * Description:
 *
 * 1) develop a function that sorts 3 numbers.
 * 2) sorting algorithim, pointers, methods.
 *
 ********************************************************/

void swap(int *, int *, int *);

int main()
{
    int line = 0;
    printf("Sorting Three Numbers!\n\n");
    while (line < 25)
    {
        printf("%c", 196);
        line++;
    }
    printf("\n");
    int a;
    int b;
    int c;

    printf("Please enter the first number: ");
    scanf("%d", &a);
    printf("\n");
    printf("Please enter the second number: ");
    scanf("%d", &b);
    printf("\n");
    printf("Please enter the third number: ");
    scanf("%d", &c);
    printf("\n");

    swap(&a, &b, &c);
    printf("Sorted Numbers: %d %d %d.\n", a, b, c);

    return 0;
}

/**
 * Sort the variables from least ot greatest.
 *
 * @param *x is the memory address of variable a,
 * *y is the memory address of variable b,
 * *z is the memory address of variable c.
 *
 */

void swap(int *x, int *y, int *z)
{

    int tempSmall;
    int temp;
    if (*x < *y)
    {
        if (*x > *z) // Scenario of *z < *x < *y.
        {
            tempSmall = *z;
            *y = *x;        // *y.
            *z = *y;        // *y < *z.
            *x = tempSmall; // *x < *y < *z.
        }
    }
    else if (*x < *z) // Scenario of *y < *x < *z.
    {
        // Just swap *x and *y
        if (*x > *y)
        {
            tempSmall = *y;
            *y = *x;        // *y < *z.
            *x = tempSmall; // *x < *y < *z.
        }
    }
    else // *x is the smallest.
    {
        if (*z < *y) // Scenario of *x < *z < *y.
        {
            // Just swap *y and *z.
            temp = *y;
            *y = *z;
            *z = temp;
        }
    }
}