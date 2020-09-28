#include <bits/stdc++.h>
using namespace std;

int main()
{
  ios::sync_with_stdio();
  cin.tie();

  long long a = 10;
  int mod = 1e9 + 7;

  for (int i = 0; i < 10; i++)
    a = 10 * a % mod;

  cout << a << "\n";

  return 0;
}