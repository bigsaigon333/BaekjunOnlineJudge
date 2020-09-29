#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    long long A, B;

    cin >> A >> B;

    if (A > B)
    {
        long long tmp = A;
        A = B;
        B = tmp;
    }

    int count = max(B - A - 1, 0ll);

    cout << count << "\n";
    for (long long i = A + 1; i < B; i++)
        cout << i << " ";

    return 0;
}